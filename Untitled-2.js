<script type="text/javascript">
    $Lightning.use("c:embeddedFlowApp",
        function() {
            $Lightning.createComponent(
                "c:embeddedFlow",
                {},
                "macromediaterminplanner", // the DOM location to insert the component
                function(component) { // API name of the Flow 
                    component.startFlow("Outbound_Schedule_New_Appointment");                       
                }
            );
        }, "https://macromedia--full.sandbox.my.site.com/Scheduler"  // Site endpoint
    );
</script>