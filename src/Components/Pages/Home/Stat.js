import React from 'react';

const Stat = () => {
    return (
        <div className='text-center m-5'>
            <div className="stats stats-vertical lg:stats-horizontal">
                <div className="stat card shadow-xl bg-secondary p-2">
                    <div className="card-body">
                        <div className="stat-title">Customers</div>
                        <div className="stat-value">100k+</div>
                        <div className="stat-desc">Jan 1st 2020 - Dec 1st 2020</div>
                    </div>
                </div>
                
                <div className="stat card shadow-xl bg-primary p-2">
                    <div className="card-body">
                        <div className="stat-title">Annual Revenue</div>
                        <div className="stat-value">120M+</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>
                </div>
                
                <div className="stat card shadow-xl bg-secondary p-2">
                    <div className="card-body">
                        <div className="stat-title">Review</div>
                        <div className="stat-value">30K+</div>
                        <div className="stat-desc">↗︎ 90 (14%)</div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Stat;