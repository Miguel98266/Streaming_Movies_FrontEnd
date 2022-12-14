import React from "react";
import { Card } from "../components/Card";
export const Home = () => {
  return (
    <div className="container">
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card h-100">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          
        </div>
        <Card title='titulo' description='descripcion' image='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3DC4DC068FD8235FFA0BE0AE35F313003D8C181DD7430CF56E5B5CCE10056038/scale?width=1200&aspectRatio=1.78&format=jpeg'/>
      </div>
    </div>
  );
};
