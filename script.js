const form = document.getElementById('about-us-form');
const aboutUsPage = document.getElementById('about-us-page');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const companyName = document.getElementById('company-name').value;
  const companytype = document.getElementById('company-type').value;
  const companyspeciality = document.getElementById('company-speciality').value;
  
  aboutUsPage.innerHTML = `
    <form class="the-about-us-form">
    <br><br><br>
    <h1 class="theformh">Welcome To ${companyName}</h1>
    <textarea class="thetextarea" readonly="">${companyName} is a Professional ${companytype} Platform. Here we will provide you only best & high quality products or services, which you will like very much. We're dedicated to providing you the best of ${companytype}, with a focus on dependability and Having ${companyspeciality} All Around The World. We're working to turn our passion of ${companytype} into a booming online website that's help everyone and have easy to use access. We hope you like & support our this ${companytype} company as much as we enjoy offering them to you & facilate you with our best, Thanks!
    </textarea>
    <a class="button-888" href="index.html">Go Back!</a>
    </form>
  `;
});