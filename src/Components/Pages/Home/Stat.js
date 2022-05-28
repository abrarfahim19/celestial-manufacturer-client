import React from 'react';

const Stat = () => {
    return (
        <div className='text-center m-5'>
            <div class="stats stats-vertical lg:stats-horizontal">
                <div class="stat card shadow-xl bg-secondary p-2">
                    <div className="card-body">
                        <div class="stat-title">Customers</div>
                        <div class="stat-value">100k+</div>
                        <div class="stat-desc">Jan 1st 2020 - Dec 1st 2020</div>
                    </div>
                </div>
                
                <div class="stat card shadow-xl bg-primary p-2">
                    <div className="card-body">
                        <div class="stat-title">Annual Revenue</div>
                        <div class="stat-value">120M+</div>
                        <div class="stat-desc">↗︎ 400 (22%)</div>
                    </div>
                </div>
                
                <div class="stat card shadow-xl bg-secondary p-2">
                    <div className="card-body">
                        <div class="stat-title">Review</div>
                        <div class="stat-value">30K+</div>
                        <div class="stat-desc">↗︎ 90 (14%)</div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Stat;