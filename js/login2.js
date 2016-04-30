var $select = $("<select></select>");
$("#peliculaname").append($select);

//recorrer el menu con la funcion each
$("#peliculaname").each(function()
{
	var $select = $(this);
	//crear una opcion para el select por cada elemento
	var $option=$("<option>Alicia</option>");
	$select.append($option);
	var $option=$("<option>Xmen</option>");
	$select.append($option);
var $option=$("<option>Dioses de Egipto</option>");
	$select.append($option);
	var $option=$("<option>Civil War</option>");
	$select.append($option);
	var $option=$("<option>Deadpool</option>");
	$select.append($option);
	//obtener si el link en la pagina actual (tiene clase selected)
	if($(this).hasClass("selected"))
	{
		$option.prop("selected",true);
	}

});

var $select2 = $("<select></select>");
$("#localname").append($select2);

$("#localname").each(function()
{
	var $select = $(this);
	//crear una opcion para el select por cada elemento
	var $option=$("<option>Guayaquil</option>");
	$select.append($option);
	var $option=$("<option>Quito</option>");
	$select.append($option);
var $option=$("<option>Playas</option>");
	$select.append($option);
	var $option=$("<option>Libertad</option>");
	$select.append($option);
	var $option=$("<option>Cuenca</option>");
	$select.append($option);
	//obtener si el link en la pagina actual (tiene clase selected)
	if($(this).hasClass("selected"))
	{
		$option.prop("selected",true);
	}

});

var $select3 = $("<select></select>");
$("#imagenpeli").append($select3);

$("#imagenpeli").each(function()
{
	var $select = $(this);
	//crear una opcion para el select por cada elemento
	var $option=$('<option>Portada Alicia</option>');
	$select.append($option);
	var $option=$('<option>Portada Xmen</option>');
	$select.append($option);
var $option=$('<option>Portada Dioses de Egipto</option>');
	$select.append($option);
	var $option=$('<option>Portada CivilWar</option>');
	$select.append($option);
	var $option=$('<option>Portada Deadpool</option>');
	$select.append($option);
	//obtener si el link en la pagina actual (tiene clase selected)
	if($(this).hasClass("selected"))
	{
		$option.prop("selected",true);
	}

});

var $select4 = $("<select></select>");
$("#numEntradas").append($select4);

$("#numEntradas").each(function()
{
	var $select = $(this);
	//crear una opcion para el select por cada elemento
	var $option=$('<option>1</option>');
	$select.append($option);
	var $option=$('<option>2</option>');
	$select.append($option);
var $option=$('<option>3</option>');
	$select.append($option);
	var $option=$('<option>4</option>');
	$select.append($option);
	var $option=$('<option>5</option>');
	$select.append($option);
	//obtener si el link en la pagina actual (tiene clase selected)
	if($(this).hasClass("selected"))
	{
		$option.prop("selected",true);
	}

});

var $select5 = $("<select></select>");
$("#preciopeli").append($select5);

$("#preciopeli").each(function()
{
	var $select = $(this);
	//crear una opcion para el select por cada elemento
	var $option=$('<option>General: $2</option>');
	$select.append($option);
	var $option=$('<option>General 3D: $4</option>');
	$select.append($option);
var $option=$('<option>VIP: $3</option>');
	$select.append($option);
	var $option=$('<option>VIP3D: $5</option>');
	$select.append($option);
	var $option=$('<option>Persona discapacitada: $2.50</option>');
	$select.append($option);
	//obtener si el link en la pagina actual (tiene clase selected)
	if($(this).hasClass("selected"))
	{
		$option.prop("selected",true);
	}

});