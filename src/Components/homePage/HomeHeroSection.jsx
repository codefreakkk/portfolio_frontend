import React from 'react'

function HomeHeroSection() {
  return (
    <section class="section hero-section bg-ico-hero" id="home">
    <div class="bg-overlay bg-primary"></div>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-5">
                <div class="text-white-50">
                    <h1 class="text-white fw-semibold mb-3 hero-title">Skote - Ico Landing for a cryptocurrency business</h1>
                    <p class="font-size-14">It will be as simple as occidental in fact to an English person, it will seem like simplified as a skeptical Cambridge</p>
                    
                    <div class="d-flex flex-wrap gap-2 mt-4">
                        <a href="javascript: void(0);" class="btn btn-success">Get Whitepaper</a>
                        <a href="javascript: void(0);" class="btn btn-light">How it work</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 col-md-8 col-sm-10 ms-lg-auto">
                <div class="card overflow-hidden mb-0 mt-5 mt-lg-0">
                    <div class="card-header text-center">
                        <h5 class="mb-0">ICO Countdown time</h5>
                    </div>
                    <div class="card-body">
                        <div class="text-center">
                            
                            <h5>Time left to Ico :</h5>
                            <div class="mt-4">
                                <div data-countdown="2021/12/31" class="counter-number ico-countdown"></div>
                            </div>

                            <div class="mt-4">
                                <button type="button" class="btn btn-success w-md">Get Token</button>
                            </div>

                            <div class="mt-5">
                                <h4 class="fw-semibold">1 ETH = 2235 SKT</h4>
                                <div class="clearfix mt-4">
                                    <h5 class="float-end font-size-14">5234.43</h5>
                                </div>
                                <div class="progress p-1 progress-xl softcap-progress">
                                    <div class="progress-bar bg-info" role="progressbar" style={{width: "15%"}}>
                                        <div class="progress-label">15 %</div>
                                    </div>
                                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "30%"}}>
                                        <div class="progress-label">30 %</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default HomeHeroSection