(function(){
    let style = `<style>
/*
################
### GENERAL 
###################
*/
html, .gridster-content, div .dashboard-area{
	background-color: black;
}

/*
################
### ALERTAS 
###################
*/
label{
	color: white;
}

/*
################
### TAB 
###################
*/
.container-fluid, .tabs-container{
	display: none;
}

/*
################
### WIDGET 
###################
*/
.widget{
	background-color: black;
}

.widget-name-text{
	color: white;
}

/*
################
### DONUTS, TITULOS Y DESCRIPCIONES 
###################
*/
.ezp-widget-title-text, .ezp-chart-title, .ezp-chart-label, .ezp-chart-label-name, .ezp-bar-object-name, .ezp-bar-value, .ezp-bar-object-name, .ezp-chart-label-value, .ezp-chart-label-letter, .nv-label, donut-view .ezp-chart-donut .ezp-chart-label-letter, donut-view .ezp-chart-donut .ezp-chart-title, div .dashboard-area{
	color: white!important;
}

/*
################
### OBJETOS 
###################
*/
.object-name, .threshold-value, .ezp-chart-aggregation-value span, .label, rect title{
	color: white;
}

/*
################
### GRAFICA ALL_IVR 
###################
*/
line-chart-view .chart-linechart .cd-linechart-wrapper{
	background-color: rgba(121, 121, 121, 1);
}

line-chart-view .chart-linechart span.label{
	color: black;
}

/***** Línea de la gráfica ******/
.ark-graphs-multi-line-graph-svg .ark-graphs-multi-line-graph-data-lines path.selected{
	stroke: rgba(0,0,0,0.9);
}

/***** Círculo de la gráfica ******/
.ark-graphs-multi-line-graph-data-circle-line-0 circle{
	stroke: rgba(0,0,0,0.9);
	fill: rgba(0,0,0,1);
}

/***** Línea roja de límite ******/
.ark-graphs-multi-line-graph-threshold-lines line:first-child {
	stroke: red;
}

/*
################
### BOTON DE 15MIN, HOUR y DAY 
###################
*/
.bootstrap-select .selectpicker.btn, .dropdown-group .selectpicker.btn, .dropdown .selectpicker.btn, .bootstrap-select .selectpicker.btn:focus, .dropdown-group .selectpicker.btn:focus, .dropdown .selectpicker.btn:focus, .bootstrap-select .selectpicker.btn:hover, .dropdown-group .selectpicker.btn:hover, .dropdown .selectpicker.btn:hover, .bootstrap-select .btn-dropdown.btn, .dropdown-group .btn-dropdown.btn, .dropdown .btn-dropdown.btn, .bootstrap-select .btn-dropdown.btn:focus, .dropdown-group .btn-dropdown.btn:focus, .dropdown .btn-dropdown.btn:focus, .bootstrap-select .btn-dropdown.btn:hover, .dropdown-group .btn-dropdown.btn:hover, .dropdown .btn-dropdown.btn:hover{
	display: none;
}

</style>`;
document.head.insertAdjacentHTML("beforeend", style);
})();
