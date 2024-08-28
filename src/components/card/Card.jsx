
import classNames from "classnames";
import styles from "./card.module.scss";


const Card = ({header, children}) => {

    return (
        <>
          <div className={classNames(styles.card)}>
            <div className={classNames(styles["card-datable"], styles["table-responsive"])}>
              <div className="relative">
                  <div className={classNames(styles["card-header"],"flex items-center justify-between flex-col md:flex-row")}>
                    <div className="head-label">
                      <h5 className="card-title mb-0 leading-7 text-base md:text-lg">{header}</h5>
                    </div>
                    <div className="action-buttons">
                      <button>button</button>
                      <button>button</button>
                    </div>
                  </div>
                  {children}
              </div>
            </div>
          </div>
        </>
    )
}

export default Card