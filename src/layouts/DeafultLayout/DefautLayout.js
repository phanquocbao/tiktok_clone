import classNames from 'classnames/bind';
import Header from "../components/Header";
import Sidebar from "./Sidebar";
import styles from './DeafultLayout.module.scss'
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function DefaultLayout({children}){
    return(
        <div>
             <div className={cx("wrapper")}>
                <Header/>
                <div className={cx("container")}>
                    <Sidebar/>
                    <div className={cx("content")}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default DefaultLayout;