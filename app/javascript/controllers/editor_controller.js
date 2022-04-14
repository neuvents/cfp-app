import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['input']

  initialize () {
    this.defaults = {
      height: 500,
      menubar: false,
      plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table paste code help wordcount'
      ],
        toolbar: 'undo redo | formatselect | ' +
        ' bold italic backcolor | alignleft aligncenter ' +
        ' alignright alignjustify | bullist numlist outdent indent | ' +
        ' removeformat | code | help'
    }
  }

  connect () {
    let config = Object.assign({ target: this.inputTarget }, this.defaults)
    tinyMCE.init(config)
  }

  disconnect () {
    tinymce.remove()
  }
}