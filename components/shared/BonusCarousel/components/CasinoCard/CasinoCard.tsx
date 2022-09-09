import React from 'react';
import { Button, Card, Stack } from 'react-bootstrap';
import { BonusType } from '../../../../../types/bonus/bonusTypes';
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
          <img src={logo} alt="" />
        </div>
        <Card.Title as="h3" className={styles.title}>{title}</Card.Title>
      </Card.Header>
      <Card.Body className={styles.body}>
        {isExclusive && (
          <div className={styles.exclusive}>
            <img src="/icons/exclusive.png" alt="" />
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
              <img src="/icons/usa.png" alt="" />
            </div>
            <div className={styles.countryCheck}>
              <img src="/icons/check.png" alt="" />
            </div>
          </div>
        </Stack>
        <div className={styles.info}>
          <img src="/icons/info.png" alt="" />
        </div>
      </Card.Body>
    </Card>
  );
}
