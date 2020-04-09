$( document ).ready(function() {
  $('input:radio').change(
    function(){
      if (this.checked && this.value === "male") {
        $('.sign-up-button').attr( "disabled", "disabled" )
        $('.identification__response')
          .html('<p class="strong">Thanks so much for respecting that this community is reserved for women and non-binary people by not joining.<p>If you\'d like to share a job opportunity with our members, please submit it using <a href="https://bit.ly/2XNb2LG">this form</a>.</p>')
      } else {
        $('.sign-up-button').removeAttr("disabled");
        $('.identification__response')
          .html('<p><span class="strong">Welcome!</span> We look forward to connecting with you</p>')
      }
    });
});