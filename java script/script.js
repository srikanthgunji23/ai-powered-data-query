// scripts.js
$(function() {
    $('#date-range').daterangepicker({
        opens: 'left',
        locale: {
            format: 'MMM D, YYYY'
        },
        singleDatePicker: false, // Disable single date picker
        showDropdowns: true, // Show dropdowns for month and year selection
        autoApply: true, // Automatically apply date range selection
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        startDate: moment().subtract(29, 'days'),
        endDate: moment()
    });
});
