import axios from 'axios';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { REPLACE_DIACRITICS } from 'src/app/utils/utils-input';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-masina-modal',
  templateUrl: './masina-modal.component.html',
  styleUrls: ['./masina-modal.component.scss']
})
export class MasinaModalComponent implements OnInit {
  @Input() id_masina: number | undefined;
  modal = {} as any;

  constructor(private _spinner: NgxSpinnerService, public activeModal: NgbActiveModal, private toastr: ToastrService) {
  }
  ngOnInit(): void {
    if (this.id_masina) {
      this._spinner.show();
      axios.get(`/api/masina/${this.id_masina}`).then(({ data }) => {
        this.modal = data;
        this._spinner.hide();
      }).catch(() => this.toastr.error('Eroare la preluarea informației!'));
    }
  }

  save(): void {
    this._spinner.show();
    if (!(this.modal.brandname && this.modal.modelname && this.modal.year && this.modal.capacity)) {
      this.toastr.error('Informații incomplete!')
      this._spinner.hide()
      return
    }
    this.modal.tax = 200
    if (this.modal.capacity < 1500) this.modal.tax = 50
    if (this.modal.capacity > 1500 && this.modal.capacity < 2000) this.modal.tax = 100
    if (!this.id_masina) {
      axios.post('/api/masina', this.modal).then(() => {
        this._spinner.hide();
        this.toastr.success('Informația a fost salvată cu succes!');
        this.activeModal.close();
      }).catch(() => this.toastr.error('Eroare la salvarea informației!'));
    } else {
      axios.put('/api/masina', this.modal).then(() => {
        this._spinner.hide();
        this.toastr.success('Informația a fost modificată cu succes!');
        this.activeModal.close();
      }).catch(() => this.toastr.error('Eroare la modificarea informației!'));
    }
  }

  selectSearch(term: string, item: any): boolean {
    const isWordThere = [] as any;
    const splitTerm = term.split(' ').filter(t => t);

    item = REPLACE_DIACRITICS(item.name);

    splitTerm.forEach(term => isWordThere.push(item.indexOf(REPLACE_DIACRITICS(term)) !== -1));
    const all_words = (this_word: any) => this_word;

    return isWordThere.every(all_words);
  }

}
