/* global angular, $ */
var app = angular.module("prsApp", []);

app.directive("prsFileUpload", function() {
    return {
        restrict: 'E',
        
        templateUrl: 'tpl/fileUpload.tpl',
        
        replace: 'true',
        
        link: function(scope, element, attrs) {
            $(element).fileupload({
                dataType: 'json',
                
                progressInterval: 100,
                
                url: 'https://upload.wistia.com',
                
                // should be done server side to avoid api/token exposure
                formData: [{
                    name: 'api_password',
                    value: '9cda24b4f51e931570bf104983fe41f6d14c615b2c574434e07d9a1e1a67917e'
                }],
                
                done: function (e, data) {
                    var video = $(element).find('#video');
                    video.html('');
                    
                    $('<div class="wistia_embed wistia_async_' + data.result.hashed_id + '" style="height:480px;width:640px">&nbsp;</div>').appendTo(video);
                    $('<script charset="ISO-8859-1" src="//fast.wistia.com/assets/external/E-v1.js" async></script>').appendTo(video);
                },
                
                progress: function (e, data) {
                    var progress = parseInt(100 * data.loaded / data.total, 10);
                    $('#progress .bar').css('width', progress + '%');
                    $('#progress .bar').text(progress + '%');
                }
            });
        }
    };
});