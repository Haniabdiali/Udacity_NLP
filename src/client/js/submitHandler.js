const { fetchData } = require("./fetchData.js");
const { isValidUrl } = require("./checkURL");
const { showoutput } = require("./showoutput.js");

/**
 * call DOM manipulation method to show the results
 * @param {e} e submit click event
 */

const submitHandler = async (e) => {
  e.preventDefault();
  const urlInput = document.getElementById('article-url');
  const { value } = urlInput;
  
  if (isValidUrl(value)) {
    const data = await fetchData('http://localhost:8080/analyse', { url: value });
    showoutput({ data });
  } else {
    alert('Please, Enter a valid article URL');
  }
}

module.exports = {
  submitHandler,
};
