function Colors({colorLeft, colorRight, setColorRight, setColorLeft}){
 return (
<div className="color-body">
    <p>Choose your colors:</p>
<div className="colors">
    <div>
        <input className="color-input" type="color" id="head" name="head" value={colorLeft}
        onChange={(event) => setColorLeft(event.target.value)} />

    </div>

    <div>
        <input className="color-input" type="color" id="body" name="body" value={colorRight}
        onChange={(event) => setColorRight(event.target.value)} />
    </div>
    </div>
</div>

 )

}

export default Colors;