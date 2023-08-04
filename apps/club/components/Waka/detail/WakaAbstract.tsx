import { WakaMemberDetail } from '@megabrain/core';
import { CSSWithElement, Flex, Text } from '@megabrain/ui';
import { DAY_OF_WEEK, sumOfWakaDailyUnits, wakaTimeStr } from '../utils';

interface WakaAbstractProps {
  detail: WakaMemberDetail;
}

export const WakaAbstract: React.FC<WakaAbstractProps> = ({ detail }) => {
  const [topLang, topProject, topEditor, topDay] = [
    detail.languages[0],
    detail.projects[0],
    detail.editors[0],
    detail.days
      .map((v) => ({
        name: DAY_OF_WEEK[new Date(v.date).getDay()],
        time: sumOfWakaDailyUnits(v.editor),
      }))
      .sort((lhs, rhs) => rhs.time - lhs.time)[0],
  ];

  return (
    <>
      <Flex
        flow
        css={abstractBoxStyle}
        direction={{
          '@mobile': 'col',
        }}
      >
        <Flex
          radius
          css={{
            backgroundColor: '#ffefe3',
          }}
        >
          <Text css={abstractTimeStyle}>{wakaTimeStr(topLang.time)}</Text>
          <Text
            weight="thin"
            css={labelCSS}
          >
            language
          </Text>
          <Text>{topLang.name}</Text>
        </Flex>
        <Flex
          radius
          items="center"
          css={{
            background: '#effcef',
          }}
        >
          <Text css={abstractTimeStyle}>{wakaTimeStr(topProject.time)}</Text>
          <Text
            weight="thin"
            css={labelCSS}
          >
            project
          </Text>
          <Text>{topProject.name}</Text>
        </Flex>
      </Flex>
      <Flex
        flow
        css={abstractBoxStyle}
        direction={{
          '@mobile': 'col',
        }}
      >
        <Flex
          radius
          css={{
            background: '#e6f5f9',
          }}
        >
          <Text css={abstractTimeStyle}>{wakaTimeStr(topEditor.time)}</Text>
          <Text
            weight="thin"
            css={labelCSS}
          >
            editor
          </Text>
          <Text>{topEditor.name}</Text>
        </Flex>
        <Flex
          radius
          direction="col"
          css={{
            background: '#f4f6fa',
          }}
        >
          <Text css={abstractTimeStyle}>{wakaTimeStr(topDay.time)}</Text>
          <Text
            weight="thin"
            css={labelCSS}
          >
            day
          </Text>
          <Text>{topDay.name}요일</Text>
        </Flex>
      </Flex>
    </>
  );
};
export default WakaAbstract;

const abstractBoxStyle: CSSWithElement<HTMLDivElement> = {
  justifyContent: 'space-around',
  rowGap: 20,
  columnGap: 20,
  '& > div': {
    width: '180px',
    padding: '15px 0px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: 5,
  },

  '@mobile': {
    width: '80%',
    '& > div:nth-child(2)': {
      alignSelf: 'flex-end',
    },
  },
};

const abstractTimeStyle: CSSWithElement<HTMLSpanElement> = {
  fontSize: 18,
  fontWeight: 600,
};

const labelCSS: CSSWithElement<HTMLElement> = {
  fontSize: 12,
};
