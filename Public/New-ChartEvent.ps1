﻿function New-ChartEvent {
    [cmdletBinding()]
    param(
        [Parameter(Mandatory)][string] $DataTableID,
        [Parameter(Mandatory)][int] $ColumnID
    )
    $Script:HTMLSchema.Features.EscapeRegex = $true
    $Script:HTMLSchema.Features.ChartsEvents = $true

    $Output = @"
            events: {
                click: function (event, chartContext, config) {
                    chartEventClick('$DataTableID', $ColumnID, config.config, config.dataPointIndex, config.seriesIndex);
                },
                dataPointSelection: function (event, chartContext, config) {
                    chartEventDataPointClick('$DataTableID', $ColumnID, config.w.config, config.dataPointIndex);
                },
                markerClick: function (event, chartContext, { seriesIndex, dataPointIndex, config }) {
                    chartEventMarkerClick('$DataTableID', $ColumnID, chartContext.opts, dataPointIndex, seriesIndex);
                }
            }

"@

    $DataTablesOutput = @"
    `$.fn.dataTable.ext.search.push(
        function (settings, searchData, index, rowData, counter) {
            return dataTablesSearchExtension('$DataTableID', settings, searchData, index, rowData, counter, true);
        }
    );
"@

    Add-HTMLScript -Placement Footer -Content $DataTablesOutput

    [PSCustomObject] @{
        ObjectType = 'ChartEvents'
        Event      = $Output
    }
}