import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SuggestedAccounts.module.scss';
import { faCheck, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem () {
    return (
        <div className={cx('account-item')}> 
            <img
             className={cx('avatar')}
             alt=''
             src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1671631200&x-signature=m7YYkzOZ4PiGsVT7SBMHv3bN50U%3D' />
            <div className={cx("item-info")}>   
                <p className={cx('nickname')}>
                    <strong>theanh28entertainment</strong>
                    <FontAwesomeIcon classNames={cx('check')} icon={faCircleCheck} />
                </p>
                <p className={cx('name')}>theanh28entertainment</p>
            </div>
        </div>
    )
}
// AccountItem.propTypes = {

// }
export default AccountItem;