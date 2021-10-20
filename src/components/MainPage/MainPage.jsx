import React, {useState} from 'react';

import ModalPopUp from '../Modals/PopUpModal/ModalPopUp';
import PieChart from "../Charts/PieChart/PieChart";
import {imgs} from '../../mock/mock';

import styles from './MainPage.module.scss'

const MainPage = (props) => {
	const [hidden, setHidden] = useState(false);

	const openModal = () => {
		setHidden(true)
	}

	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.headWrapper}>
						<div className={styles.headWrapperTitle}>
							<h1>Sales statistics</h1>
							<p>Welcome to CRM dashboard</p>
						</div>
						<div onClick={openModal} className={styles.wrapperButton}>
							<img src={imgs[0].createIcon} className={styles.buttonLogo} alt={'createIcon'}/>
							<p className={styles.buttonText}>Create a product</p>
						</div>
					</div>
					<hr/>
					<div className={styles.mainWrap}>
						<div className={styles.saleDay}>
							{/*<h2>Sales schedule by day</h2>*/}
							<div className={styles.ovalDiagram}>
								<PieChart/>
								<ul className={styles.analyticList}>
									<li className={styles.analyticItem}>
										<img className={styles.ovalIcon} src={imgs[0].smallOvalIcon} alt="analytic"/>
										<p>Auto goods</p>
									</li>
									<li className={styles.analyticItem}>
										<img src={imgs[0].smallOvalIcon} alt=""/>
										<p>Auto goods</p>
									</li>

									<li className={styles.analyticItem}>
										<img src={imgs[0].smallOvalIcon} alt=""/>
										<p>Auto goods</p>
									</li>

									<li className={styles.analyticItem}>
										<img src={imgs[0].smallOvalIcon} alt=""/>
										<p>Auto goods</p>
									</li>

								</ul>

							</div>
						</div>

						<div className={styles.saleTotal}>
							<h2>Total earned</h2>
							<div className={styles.vectorDiagram}>
								<img src={imgs[0].vector} alt="vector"/>
								<p>$106,000</p>
							</div>
						</div>

						<div className={styles.saleOverview}>
							<h2>Sales overview</h2>
							<p>Graph sales for all days</p>
							<div className={styles.overviewDiagram}>

							</div>
						</div>
					</div>
				</div>
			</div>
			<ModalPopUp hidden={hidden} setHidden={setHidden}/>
		</>
	);

}
export default MainPage;