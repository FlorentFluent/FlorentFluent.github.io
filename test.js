<script>
$Lightning.use("c:embeddedFlowApp",
function() { // Callback once framework and app load
$Lightning.createComponent(
"c:embeddedFlow", // top-level component of your app
{mmLang="Deutsch",mmBrand="HM"}, // attributes to set on the component when created
"macromediaterminplanner", // the DOM location to insert the component
function(component) { // API name of the Flow
component.startFlow(”Outbound_Schedule_New_Appointment”);
}
);
}, 'https://macromedia--full.sandbox.my.site.com/Scheduler/s/' // Site endpoint
);
</script>