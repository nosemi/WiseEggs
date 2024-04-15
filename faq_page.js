// Toggle answer 
document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question h3');
  
    questions.forEach(function(question) {
      question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        answer.classList.toggle('active');
      });
    });
  });

// Toggle sidebar
  function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}

// Toggle "show all" and "Close all" buttons
function toggleAnswer(question) {
    const answer = question.nextElementSibling;
    answer.classList.toggle('active');
  }
  
  function showAllAnswers() {
    const answers = document.querySelectorAll('.answer');
    answers.forEach(answer => answer.classList.add('active'));
  }
  
  function closeAllAnswers() {
    const answers = document.querySelectorAll('.answer');
    answers.forEach(answer => answer.classList.remove('active'));
  }
  
  