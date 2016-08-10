/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed in the allFeeds object
         * and ensures it has a URL defined and that the URL is
         * not empty.
         */
        it('to have defined URLs', function() {
            for (var i = 0, len = allFeeds.length; i < len; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            };
        });

        /* This test loops through each feed in the allFeeds object
         * and ensures it has a name defined and that the name is
         * not empty.
         */
        
        it('to have defined names', function() {
            for (var i = 0, len = allFeeds.length; i < len; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            };
        });

    }); 

    describe('The menu', function() {
        var body = document.body;
        var menuButton = document.querySelector(".menu-icon-link");

        /* This test ensures the menu element is hidden by default.
         */
        it('should be hidden by default', function() {
            expect(body.className).toContain("menu-hidden");
        });
         /* This test ensures the menu changes visibility when the
          * menu icon is clicked. This test has two expectations:
          * 1- does the menu display when clicked?
          * 2- does it hide when clicked again?
          */
        it('should display when clicked and hide when clicked again', function() {
            menuButton.click();
            expect(body.className).not.toContain("menu-hidden");

            menuButton.click();
            expect(body.className).toContain("menu-hidden");
        });

    });

    describe('Initial Entries', function() {

        /* This test ensures when the loadFeed function is called and
         * completes its work, there is at least a single. entry
         * element within the .feed container. This test requires
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done) {
            loadFeed(0, done)
         });

         it('feed container has at least one entry', function() {
            var entry = document.querySelector('.feed .entry');
            expect(entry.length).not.toBe(0);
         });
    });
    
    describe('New Feed Selection', function() {

        /* This test ensures when a new feed is loaded by the loadFeed
         * function that the content actually changes. This test will also
         * require Jasmine's beforeEach and asynchronus done() function.
         */
        var initialContent;

        beforeEach(function(done) {
            loadFeed(0, function() {
                initialContent = document.querySelector('.feed').innerHTML;

                loadFeed(1, function() {
                    done();
                });
            });
        });

        it('When a new feed is loaded by the loadFeed function the content changes', function() {
            var newContent = document.querySelector('.feed').innerHTML;
            expect(newContent).not.toBe(initialContent);
        });
    });
}());
