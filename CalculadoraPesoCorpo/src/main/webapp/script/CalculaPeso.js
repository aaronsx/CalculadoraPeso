function Calcula(form)
{
	let genero=form.Genero.value;
	let edad=Number(form.Edad.value);
	let altura=Number(form.Altura.value);
	var corporal;
	if (genero=="hombre")
	{
		corporal=eval(50+((altura-150)/4)*3 + (edad - 20)/4);
	}
	else if(genero=="mujer")
	{
		corporal=eval((50+((altura-150)/4)*3 + (edad - 20)/4)*0.9);
	}
	else
	{
		document.write("OTROS");
	}
	document.write("Hola "+genero+" tu altura es "+altura+" y peso es "+edad+" por lo ranto tu peso corporal es "+corporal);
}