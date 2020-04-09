$( document ).ready(function() {
  $('input:radio').change(
    function(){
      if (this.checked && this.value === "male") {
        $('.sign-up-button').attr( "disabled", "disabled" )
        $('.identification__response')
          .html('<p>Thanks for respecting the safe space of this group and not joining.</p><p>Job postings can be shared via <a href="https://bit.ly/2XNb2LG">this form</a>.</p>')
      } else {
        $('.sign-up-button').removeAttr("disabled");
        $('.identification__response')
          .text('Welcome! We look forward to connecting with you')
      }
    });
});