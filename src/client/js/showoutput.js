/**
 * Manipulate DOM to show result analysis
 * @param {Object, API response} param0 api response contain analysis results
 */

const showoutput = ({ data }) => {
  document.getElementById("agreement").innerHTML = `Agreement: ${data.agreement}`;
  document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.subjectivity}`;
  document.getElementById("confidence").innerHTML = `Confidence: ${data.confidence}`;
  document.getElementById("irony").innerHTML = `Irony: ${data.irony}`;
  document.getElementById("score_tag").innerHTML = `Score_tag: ${data.score_tag}`;
}

module.exports = {
  showoutput,
}