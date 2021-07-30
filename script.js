function getInputValue()
{
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    var inputVal = document.getElementById('Mname').value;

    canvas.width = 3240;
    canvas.height = 3240;

    const frame = document.getElementById('frame');
    ctx.drawImage(frame,0,0);
    ctx.textAlign = 'center';
    ctx.font = 'bold 301px Whyte-Inktrap';
    ctx.fillStyle = "hsl(63deg 88% 38% / 80%) ";
    ctx.fillText(`${inputVal}`,frame.width/2,1620);

    if(window.navigator.msSaveBlob){
        window.navigator.msSaveBlob(canvas.msToBlob(),`DW_${inputVal}.png`);
    } else {
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.href = canvas.toDataURL();
        a.download = `DW_${inputVal}.png`;
        a.click();
        document.body.removeChild(a);
    }
}
