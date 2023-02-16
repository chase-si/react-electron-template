import styled from 'styled-components'

import { COLOR, rem, VAR } from '../../style'
import {
    homeMonitorLL,
    homeMonitorLLActive,
    homePerceptionWX,
    homePerceptionWXActive,
    homeDataTJ,
    homeDataTJActive,
    homePerceptionRW,
    homePerceptionRWActive,
    homeFacilityKZ,
    homeFacilityKZActive,
    homeSystemGL,
    homeSystemGLActive,
    homeRight,
    homeEntrance,
    homeGZWX,
    homeGZRW,
    homeDCHJ,
    homeBackground
} from '../../static/img'

export const HomepageContainer = styled.div`
    display: flex;
    justify-content: center;
    background-image: url(${homeBackground});
    background-size: cover;
    height: calc(100vh - ${VAR.navbarHeight});

    .bg-container {
        display: flex;

        .left-icons {
            width: ${rem('1210px')};
            margin-top: ${rem('60px')};
            margin-left: ${rem('130px')};
            margin-right: ${rem('100px')};
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .icon-row {
                display: flex;

                a {
                    height: ${rem('380px')};
                    width: ${rem('380px')};
                    background-size: cover;
                    margin-right: ${rem('60px')};
                    margin-bottom: ${rem('60px')};
                    font-size: ${rem('26px')};
                    color: ${COLOR.white};
                    padding-top: ${rem('16px')};
                    padding-left: ${rem('28px')};
                    display: inline-block;

                    &:hover {
                        transform: translateY(-5px) scale(1.02);
                        transition: .3s;
                    }

                    &.icon-monitorll {
                        background-image: url(${homeMonitorLL});
                        &:hover {
                            background-image: url(${homeMonitorLLActive});
                        }
                        &:after {
                            content: ' ';
                            background-image: url(${homeMonitorLLActive});
                            width: 0;
                            height: 0;
                        }
                    }

                    &.icon-perceptionwx {
                        background-image: url(${homePerceptionWX});
                        &:hover {
                            background-image: url(${homePerceptionWXActive});
                        }
                        &:after {
                            content: ' ';
                            background-image: url(${homePerceptionWXActive});
                            width: 0;
                            height: 0;
                        }
                    }

                    &.icon-datatj {
                        background-image: url(${homeDataTJ});
                        &:hover {
                            background-image: url(${homeDataTJActive});
                        }
                        &:after {
                            content: ' ';
                            background-image: url(${homeDataTJActive});
                            width: 0;
                            height: 0;
                        }
                    }

                    &.icon-perceptionrw {
                        background-image: url(${homePerceptionRW});
                        &:hover {
                            background-image: url(${homePerceptionRWActive});
                        }
                        &:after {
                            content: ' ';
                            background-image: url(${homePerceptionRWActive});
                            width: 0;
                            height: 0;
                        }
                    }

                    &.icon-facilitykz {
                        background-image: url(${homeFacilityKZ});
                        &:hover {
                            background-image: url(${homeFacilityKZActive});
                        }
                        &:after {
                            content: ' ';
                            background-image: url(${homeFacilityKZActive});
                            width: 0;
                            height: 0;
                        }
                    }

                    &.icon-systemgl {
                        background-image: url(${homeSystemGL});
                        &:hover {
                            background-image: url(${homeSystemGLActive});
                        }
                        &:after {
                            content: ' ';
                            background-image: url(${homeSystemGLActive});
                            width: 0;
                            height: 0;
                        }
                    }
                } 
            }
        }

        .right-icons {
            width: ${rem('450px')};
            background-size: contain;
            background-repeat: no-repeat;
            background-image: url(${homeRight});
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;

            .entrance {
                width: ${rem('301px')};
                height: ${rem('51px')};
                font-size: ${rem('28px')};
                color: ${COLOR.white};
                background-size: contain;
                background-image: url(${homeEntrance});
                text-align: center;
                margin-top: ${rem('60px')};
            }

            .icon {
                display: flex;
                flex-direction: column;
                align-items: center;
                
                .button {
                    width: ${rem('69px')};
                    height: ${rem('65px')};
                    margin-bottom: ${rem('18px')};
                    background-size: contain;
                    background-repeat: no-repeat;

                    &.icon-gzwx {
                        background-image: url(${homeGZWX});
                    }

                    &.icon-gzrw {
                        background-image: url(${homeGZRW});
                    }

                    &.icon-dchj {
                        background-image: url(${homeDCHJ});
                    }
                }
                
                &:hover {
                    transform: translateY(-5px) scale(1.1);
                    transition-duration: .3s;
                }
            }
        }
    }
`
