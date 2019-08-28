import React from 'react';
import Base from '../layouts/Base';

const Index = () => {
    return (  
        <Base title='Index Page' description='descripcion de la pagina inicial'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <b>Hi from index</b>
                    </div>
                </div>
            </div>
        </Base>
    );
}
 
export default Index;