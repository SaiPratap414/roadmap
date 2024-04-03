import { FunctionComponent, memo } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = memo(() => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.lineWrapper}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.marWeek3Parent}>
            <div className={styles.marWeek3}>MAR week 3</div>
            <div className={styles.mar30}>MAR 30</div>
          </div>
          <div className={styles.presaleIdoParent}>
            <div className={styles.presaleIdo}>
              <p className={styles.presale}>presale</p>
              <p className={styles.ido}>+IDO</p>
            </div>
            <div className={styles.lineContainer}>
              <div className={styles.frameItem} />
            </div>
            <div className={styles.stealthLaunchXyzContainer}>
              <p className={styles.stealthLaunch}>Stealth Launch</p>
              <p className={styles.xyzOnEth}>$xyz on Eth</p>
            </div>
            <div className={styles.lineFrame}>
              <div className={styles.frameInner} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.ongoingParent}>
          <b className={styles.ongoing}>ongoing</b>
          <div className={styles.lineParent}>
            <div className={styles.lineDiv} />
            <b className={styles.aprWeek1}>APR week 1</b>
            <div className={styles.airdropAndPartnershipsParent}>
              <div className={styles.airdropAndPartnershipsContainer}>
                <p className={styles.airdropAnd}>{`Airdrop and `}</p>
                <p className={styles.partnerships}>Partnerships</p>
              </div>
              <div className={styles.frameChild1} />
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <img
            className={styles.rectangleIcon}
            loading="lazy"
            alt=""
            src="/rectangle-14@2x.png"
          />
          <img
            className={styles.frameChild2}
            loading="lazy"
            alt=""
            src="/rectangle-15@2x.png"
          />
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.upcomingParent}>
          <b className={styles.upcoming}>upcoming</b>
          <div className={styles.lineGroup}>
            <div className={styles.frameChild3} />
            <b className={styles.aprWeek11}>APR week 1</b>
            <div className={styles.frameParent1}>
              <div className={styles.lineWrapper1}>
                <div className={styles.frameChild4} />
              </div>
              <div className={styles.gameTestnet}>
                <p className={styles.game}>{`Game `}</p>
                <p className={styles.testnet}>testnet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper1}>
        <div className={styles.aprWeek2Parent}>
          <b className={styles.aprWeek2}>APR Week 2</b>
          <div className={styles.nftArtRevealParent}>
            <div className={styles.nftArtRevealContainer}>
              <p className={styles.nftArt}>NFT art</p>
              <p className={styles.reveal}>Reveal</p>
            </div>
            <div className={styles.lineWrapper2}>
              <div className={styles.frameChild5} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper2}>
        <div className={styles.aprWeek3Parent}>
          <b className={styles.aprWeek3}>APR WEEK 3</b>
          <div className={styles.gameMainnetParent}>
            <div className={styles.gameMainnet}>
              <p className={styles.game1}>{`game `}</p>
              <p className={styles.mainnet}>mainnet</p>
            </div>
            <div className={styles.lineWrapper3}>
              <div className={styles.frameChild6} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default FrameComponent;
