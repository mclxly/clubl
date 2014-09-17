/*!
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
(function () {
  'use strict';

  //Initial load of page
  $(document).ready(sizeContent);

  //Every resize of window
  $(window).resize(sizeContent);

  //Dynamically assign height
  function sizeContent() {
      var newHeight = $(document).height() + "px";
      $(".index-form").css("height", newHeight);//"100%");
      // console.log($(document).height());
  };

  $('#forgot-pwd').on('click', function(event) {    
    $("#forgot-pwd-dialog").modal({
        autoPosition: true,
        autoResize: false,
        closeHTML: null,
        close: true,        
        overlayClose: true,
        closeByEscape: true,
        containerCss: ({
          width: "450px",
          height: "250px",
        }),
        onShow: function(dialog) {
          $("#forgot-pwd-dialog .error-info").addClass('hide');
          $("#forgot-pwd-dialog #login-submit").prop('disabled', true);
        },
      });

    $("#simplemodal-container").css("top", "-=100");

    $('#forgot-pwd-dialog #login-cancel').on('click', function(event) {      
      console.log('close');
      $.modal.close();
    });

    $('#forgot-pwd-dialog #email').on('keyup keypress blur change input', function(event) {
      if( $("#forgot-pwd-dialog input#email").val().length > 0) {
        $("#forgot-pwd-dialog #login-submit").prop('disabled', false);     
      } else {
        $("#forgot-pwd-dialog #login-submit").prop('disabled', true);
      }
    });

    $('#forgot-pwd-dialog #login-submit').on('click', function(event) {
      if( $("#forgot-pwd-dialog input#email").val().length > 0) {
        $("#forgot-pwd-dialog .error-info").removeClass('hide');
        // $.modal.close();
      }
    });

    event.preventDefault(); 
  });

  $('#login-submit').on('click', function(event) {
    $(".error-info").addClass('hide');

    if( $("input#user_login").val().length === 0 ) {
      $(".user-login .error-info").removeClass('hide');
      $(".login-form-error").removeClass('hide');
    } else {
      $(".user-login .error-info").addClass('hide');
    };

    if( $("input#user_pass").val().length === 0 ) {
      $(".user-pass .error-info").removeClass('hide');
      $(".login-form-error").removeClass('hide');
    } else {
      $(".user-pass .error-info").addClass('hide');
    }

    if( $("input#user_pass").val().length > 0 
      && $("input#user_login").val().length > 0 ) {
      $(".login-form-error").addClass('hide');
      $(".login-form-failed").removeClass('hide');
      // $("#basic-modal").modal({
      //   autoPosition: true,
      //   autoResize: false,
      //   closeHTML: null,
      //   close: true,        
      //   overlayClose: true,
      //   closeByEscape: true,
      //   containerCss: ({
      //     width: "450px",
      //     height: "250px"
      //   })
      // });
      // $(".error-info").addClass('hide');
      // $("#simplemodal-container").css("top", "-=100");

      // $('#simplemodal-overlay').on('click', function(event) {
      //   console.log('close');
      //   $.modal.close();
      // });
    }

    $(this).blur();

    event.preventDefault(); 
  })

  $('#invitation').on('click', function(event) {    
    $("#invitation-dialog").modal({
        autoPosition: true,
        autoResize: false,
        closeHTML: null,
        close: true,        
        overlayClose: true,
        closeByEscape: true,
        containerCss: ({
          width: "450px",
          height: "250px",
        }),
        onShow: function(dialog) {
          $("#invitation-dialog .error-info").addClass('hide');
          $("#invitation-dialog #login-submit").prop('disabled', true);
        },
      });

    $("#simplemodal-container").css("top", "-=100");
    $('#invitation-dialog #login-cancel').on('click', function(event) {      
      $.modal.close();
    });

    $('#invitation-dialog #code').on('keyup keypress blur change input', function(event) {
      if( $("#invitation-dialog input#code").val().length > 0) {
        $("#invitation-dialog #login-submit").prop('disabled', false);     
      } else {
        $("#invitation-dialog #login-submit").prop('disabled', true);
      }
    });

    $('#invitation-dialog #login-submit').on('click', function(event) {
      if( $("#invitation-dialog input#code").val().length > 0) {
        $("#invitation-dialog .error-info").removeClass('hide');
        // $.modal.close();
      }
    });

    event.preventDefault(); 
  });
})();
