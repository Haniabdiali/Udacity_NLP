// style sheets
require('../client/styles/base.scss');
require('../client/styles/header.scss');
require('../client/styles/footer.scss');
require('../client/styles/base.scss');
require('../client/styles/reset.scss');

const { handleSubmit } = require("/home/hani/Desktop/NLP/src/client/js/submitHandler");
/**
 * Upon DOM loading, register event handler for submit button
 */
window.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submitButton');
  submitButton.addEventListener('click', handleSubmit);
})

module.exports = {
  handleSubmit,
};
