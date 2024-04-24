import './PrincipalView.css';

export default function PrincipalView() {
  return (
    <>
      {/* ============================================ */}
      {/*                  Collection                  */}
      {/* ============================================ */}
      <section id="collection-1552">
        <div className="cs-container">
          <ul className="cs-card-group">
            <li className="cs-item cs-item-offer">
              <div className="cs-text-wrapper">
                {/* <span className="cs-offer-tag">ONLY $20</span> */}
                <h3 className="cs-h3">La mejor tienda del mundo</h3>
                <span className="cs-item-text">
                  Seleccion de temporada
                </span>
                <a className="cs-button-solid" href="/">
                  COMPRAR
                </a>
                <picture className="cs-background" aria-hidden="true">
                  <source
                    media="(max-width: 600px)"
                    srcSet="https://i.pinimg.com/564x/9c/69/32/9c6932c9ed5947e95fe3095fd0ce7f78.jpg"
                  />
                  <source
                    media="(min-width: 601px)"
                    srcSet="https://i.pinimg.com/564x/9c/69/32/9c6932c9ed5947e95fe3095fd0ce7f78.jpg"
                  />
                  <img
                    loading="lazy"
                    decoding="async"
                    src="https://i.pinimg.com/564x/9c/69/32/9c6932c9ed5947e95fe3095fd0ce7f78.jpg"
                    width={365}
                    height={201}
                  />
                </picture>
              </div>
            </li>
            <li className="cs-item">
              <a className="cs-category" href="/">
                SECCION 1
              </a>
              <picture className="cs-background" aria-hidden="true">
                <source
                  media="(max-width: 600px)"
                  srcSet="https://i.pinimg.com/564x/c2/24/a8/c224a86cf9a708ec6f5c3b49e557dcaa.jpg"
                />
                <source
                  media="(min-width: 601px)"
                  srcSet="https://i.pinimg.com/564x/c2/24/a8/c224a86cf9a708ec6f5c3b49e557dcaa.jpg"
                />
                <img
                  loading="lazy"
                  decoding="async"
                  src="https://i.pinimg.com/564x/c2/24/a8/c224a86cf9a708ec6f5c3b49e557dcaa.jpg"
                  width={365}
                  height={201}
                />
              </picture>
            </li>
            <li className="cs-item">
              <a className="cs-category" href="/">
              SECCION 2
              </a>
              <picture className="cs-background" aria-hidden="true">
                <source
                  media="(max-width: 600px)"
                  srcSet="https://i.pinimg.com/564x/15/05/37/150537c92ba6410e704a35921703c71e.jpg"
                />
                <source
                  media="(min-width: 601px)"
                  srcSet="https://i.pinimg.com/564x/15/05/37/150537c92ba6410e704a35921703c71e.jpg"
                />
                <img
                  loading="lazy"
                  decoding="async"
                  src="https://i.pinimg.com/564x/15/05/37/150537c92ba6410e704a35921703c71e.jpg"
                  width={365}
                  height={201}
                />
              </picture>
            </li>
            <li className="cs-item">
              <a className="cs-category" href="/">
              SECCION 3
              </a>
              <picture className="cs-background" aria-hidden="true">
                <source
                  media="(max-width: 600px)"
                  srcSet="https://i.pinimg.com/564x/96/98/ad/9698ad442921204408556221b9271c2e.jpg"
                />
                <source
                  media="(min-width: 601px)"
                  srcSet="https://i.pinimg.com/564x/96/98/ad/9698ad442921204408556221b9271c2e.jpg"
                />
                <img
                  loading="lazy"
                  decoding="async"
                  src="https://i.pinimg.com/564x/96/98/ad/9698ad442921204408556221b9271c2e.jpg"
                  width={365}
                  height={201}
                />
              </picture>
            </li>
            <li className="cs-item">
              <a className="cs-category" href="/">
              SECCION 4
              </a>
              <picture className="cs-background" aria-hidden="true">
                <source
                  media="(max-width: 600px)"
                  srcSet="https://i.pinimg.com/236x/22/e5/d6/22e5d6c5a18581f89bc97140674798cd.jpg"
                />
                <source
                  media="(min-width: 601px)"
                  srcSet="https://i.pinimg.com/236x/22/e5/d6/22e5d6c5a18581f89bc97140674798cd.jpg"
                />
                <img
                  loading="lazy"
                  decoding="async"
                  src="https://i.pinimg.com/236x/22/e5/d6/22e5d6c5a18581f89bc97140674798cd.jpg"
                  width={365}
                  height={201}
                />
              </picture>
            </li>
          </ul>
        </div>
      </section>
    </>




  )
}