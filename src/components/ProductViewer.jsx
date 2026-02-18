

const ProductViewer = () =>{
    return (
        <section>
            <h2>Take a closer look.</h2>

            <div className="controls">
                <p className="info">MacBook 16 in Space Black </p>

                <div className="flex-container gap-5 mt-5">
                    <div className='color-control'>
                        <div className='bg-neutral-300'/>
                        <div className='bg-neutral-900'/>
                    </div>

                    <div className="size-control">
                        <div><p>14</p></div>
                        <div><p>16</p></div>
                    </div>
                </div>
            </div>

            <p className="text-white text-4xl">Render Canvas</p>
        </section>
    )
}

export default ProductViewer