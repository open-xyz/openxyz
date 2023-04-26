import React from 'react';
import AdminCard from './AdminCard';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { LeftArrow, RightArrow } from '../ui/Arrows';
import usePreventBodyScroll from '../../hooks/usePreventBodyScroll';
import { useAdmins } from '../../context/AdminsContext';
import './admins.scss';

const Arrows = () => (
    <div className="arrows">
        <LeftArrow /> <RightArrow />
    </div>
);

function Admins() {
    const { admins, loading } = useAdmins();
    const { disableScroll, enableScroll } = usePreventBodyScroll();

    console.log(admins);

    return (
        <>
            <section id="admins">
                <div className="admins-container">
                    <h1 className="title">Our Crew</h1>
                    <div className="admins__list">
                        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
                            <ScrollMenu Footer={Arrows} onWheel={onWheel}>
                                {!loading &&
                                    admins.map(admin => (
                                        <AdminCard admin={admin} key={admin.id} />
                                    ))}
                            </ScrollMenu>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function onWheel(apiObj, ev) {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
        ev.stopPropagation();
        return;
    }

    if (ev.deltaY < 0) {
        apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
        apiObj.scrollPrev();
    }
}

export default Admins;
