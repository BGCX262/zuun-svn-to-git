function hej(cos) {
	alert(cos);
}
function showObj(o) {
			js_vardump(o);	
			
		}
		

function js_vardump(obj, parent)
{
	alert(obj.toSource());
    for (var i in obj)
    {
        if (parent)
        {
            var msg = parent + "." + i + "\n" + obj[i];
        } else {
            var msg = i + "\n" + obj[i];
        }
        if (!confirm(msg)) { return; }
        if (typeof obj[i] == "object")
        {
            if (parent)
            {
                js_vardump(obj[i], parent + "." + i);
            } else {
                js_vardump(obj[i], i);
            }
        }
    }
}

