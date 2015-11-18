var base_url = "http://localhost:8080/";

function setUpHTMLFixture() {
   // loadFixtures('../../../index.html');
};

describe('.get() Test', function() {
    beforeEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
        setUpHTMLFixture();
    });

    it("should return status code 200", function(done) {
        var ajaxme = AjaxMe,
            success = false,
            request;

        request = ajaxme.get({
            url: 'data.json',
            success: function(data) {
                success = (data.status==200);
                expect(success).toEqual(true);
                done();
            }
        });
    });
});

describe('.post() Test', function() {
    beforeEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
        setUpHTMLFixture();
    });

    it("should return status code 200", function(done) {
        var ajaxme = AjaxMe,
            success = false,
            request;

        request = ajaxme.post({
            url:  base_url + 'post',
            data: 'username=Ion&senha=12456',
            success: function(data) {
                success = (data.status==200);
                expect(success).toEqual(true);
                done();
            }
        });
    });

});
