import React from 'react';
import Image from 'next/image';
import { Button, Card, Stack } from 'react-bootstrap';
import { BonusType } from '../../../../../types/bonus/bonusTypes';
import exclusiveIcon from '../../../../../public/icons/exclusive.png';
import infoIcon from '../../../../../public/icons/info.png';
import usaIcon from '../../../../../public/icons/usa.png';
import checkIcon from '../../../../../public/icons/check.png';
import styles from './CasinoCard.module.scss';

interface CasinoCardProps {
  card: BonusType;
}

export function CasinoCard({ card:
  { logo, title, isExclusive = false, type, bonusUp, bonusValue, bonusPlus, bonusGame }
}: CasinoCardProps) {
  return (
    <Card className={styles.card}>
      <Card.Header className={styles.head}>
        <div className={styles.logo}>
          <Image src={logo} alt="" />
        </div>
        <Card.Title as="h3" className={styles.title}>{title}</Card.Title>
      </Card.Header>
      <Card.Body className={styles.body}>
        {isExclusive && (
          <div className={styles.exclusive}>
            <Image src={exclusiveIcon} alt="" />
          </div>
        )}
        <span className={styles.type}>{type}</span>
        <Card.Text className={styles.bonus}>
          <span className={styles.bonusUp}>{bonusUp}% up to</span>
          <span className={styles.bonusValue}>{bonusValue}</span>
          <span className={styles.bonusPlus}>{bonusPlus}</span>
          <span className={styles.bonusGame}>{bonusGame}</span>
        </Card.Text>
        <Stack direction="horizontal">
          <Button variant="warning" className={styles.btn}>Play</Button>
          <div className={styles.country}>
            <div className={styles.countryIcon}>
              <Image src={usaIcon} alt="" />
            </div>
            <div className={styles.countryCheck}>
              <Image src={checkIcon} alt="" />
            </div>
          </div>
        </Stack>
        <div className={styles.info}>
          <Image src={infoIcon} alt="" />
        </div>
      </Card.Body>
    </Card>
  );
}
