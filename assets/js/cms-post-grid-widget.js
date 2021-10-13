( function( $ ) {
    /**
     * @param $scope The Widget wrapper element as a jQuery element
     * @param $ The jQuery alias
     */

    var WidgetPostMasonryHandler = function( $scope, $ ) {
        $('.cms-grid-masonry').imagesLoaded(function(){
            $.sep_grid_refresh();
        });
    };

    // Make sure you run this code under Elementor.
    $( window ).on( 'elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction( 'frontend/element_ready/cms_product_grid.default', WidgetPostMasonryHandler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/cms_post_grid.default', WidgetPostMasonryHandler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/cms_post_list.default', WidgetPostMasonryHandler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/cms_lq_pet_grid.default', WidgetPostMasonryHandler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/cms_team_grid.default', WidgetPostMasonryHandler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/cms_service_grid.default', WidgetPostMasonryHandler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/cms_image_gallery.default', WidgetPostMasonryHandler );
    } );
} )( jQuery );