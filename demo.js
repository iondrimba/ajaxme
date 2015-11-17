;
(function() {
    console.log('DEMO', AjaxMe);
    var $$ = NoJQuery,
        ajaxme = AjaxMe,
        btnPost = $$('.btn-post'),
        btnGet = $$('.btn-get'),
        btnAbort = $$('.btn-abort'),
        btnSubmitForm = $$('.btn-form-submit'),
        request;

    function loadJson() {
        request = ajaxme.get({
            url: 'data.json',
            success: function() {
                console.log('success', arguments);
            },
            error: function() {
                console.log('error', arguments);
            },
            abort: function() {
                console.log('abort', arguments);
            },
            loadend: function() {
                console.log('loadend', arguments);
            },
            loadstart: function() {
                console.log('loadstart', arguments);
            },
            progress: function(evt) {
                console.log('progress', evt.percent);
            }
        });
    };

    function postJson() {
        request = ajaxme.post({
            url: $$('form').getAttr('action'),
            json:true,
            data: {
                hello:'Hi'
            },
            success: function() {
                console.log('success', arguments);
            },
            error: function() {
                console.log('error', arguments);
            },
            abort: function() {
                console.log('abort', arguments);
            },
            loadend: function() {
                console.log('loadend', arguments);
            },
            loadstart: function() {
                console.log('loadstart', arguments);
            },
            progress: function(evt) {
                console.log('progress', evt.percent);
            }
        });
    };

    function submitForm() {
        request = ajaxme.post({
            url: 'http://localhost:9000/upload',
            json:true,
            data: {
                hello:'Hi'
            },
            success: function() {
                console.log('success', arguments);
            },
            error: function() {
                console.log('error', arguments);
            },
            abort: function() {
                console.log('abort', arguments);
            },
            loadend: function() {
                console.log('loadend', arguments);
            },
            loadstart: function() {
                console.log('loadstart', arguments);
            },
            progress: function(evt) {
                console.log('progress', evt.percent);
            }
        });
    };

    btnPost.on('click', function post(evt) {
        console.log('click post');
        postJson();
    });
    btnGet.on('click', function get(evt) {
        console.log('click get');
        loadJson();
    });
    btnAbort.on('click', function get(evt) {
        console.log('click abort');
        request.abort();
    });

    btnSubmitForm.on('click', function(){
        submitForm();
    });

}());