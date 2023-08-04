import { GithubUser, WakaMemberDetail } from '@megabrain/core';
import { Flex, Text } from '@megabrain/ui';
import { ExternalLink } from 'react-feather';
import Coin from '../Coin';
import WakaTimeText from '../WakaTimeText';
import { calcWeeklyWage, sortWakaUnits, sumOfWakaUnits, wakaUnitToLabels } from '../utils';
import { formatSkillIconUrl } from '../utils/icons';
import { itemContainer, skillContainer } from './WakaStatusbar.style';

interface WakaStatusbarProps {
  data: WakaMemberDetail;
  githubUser: GithubUser;
}

export const WakaStatusbar: React.FC<WakaStatusbarProps> = ({ data, githubUser }) => {
  const time = sumOfWakaUnits(data.editors);

  const top5Skills = wakaUnitToLabels(sortWakaUnits([...data.languages, ...data.editors]));

  return (
    <Flex
      direction="col"
      gravity="vertical"
    >
      <Flex
        pad
        full="horizontal"
        items="center"
        direction="col"
      >
        <Flex full="horizontal">
          <Text
            weight="bold"
            tag="h1"
            css={{
              fontSize: 25,
            }}
          >
            {data.name} - {data.department}
          </Text>
          <a
            rel="noreferrer"
            href={githubUser.html_url}
            target="_blank"
          >
            <Text type="tertiary">
              <ExternalLink width="18px" />
            </Text>
          </a>
        </Flex>
        <Text
          full
          display="block"
          weight="thin"
        >
          {githubUser.bio || '소개가 존재하지 않습니다.'}
        </Text>
      </Flex>
      <Flex
        full="horizontal"
        css={itemContainer}
        direction={{
          '@mobile': 'col',
        }}
      >
        <Flex direction="col">
          <Text weight="bold">Time Money</Text>
          <Flex items="center">
            <Coin />
            <Text>&nbsp;&nbsp;{`${data.money}`}</Text>
            <Text type="accent-r">(+{calcWeeklyWage(time).toString()})</Text>
          </Flex>
        </Flex>
        <Flex direction="col">
          <Text weight="bold">Last Week</Text>
          <WakaTimeText
            time={time}
            bold={false}
          />
        </Flex>

        <Flex
          direction="col"
          css={skillContainer}
        >
          <Text
            weight="bold"
            align="center"
            css={{
              display: 'none',
              '@mobile': {
                display: 'block',
              },
            }}
          >
            Skills
          </Text>
          <img
            referrerPolicy="no-referrer"
            src={formatSkillIconUrl(top5Skills)}
            alt="기술 스택들"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default WakaStatusbar;
