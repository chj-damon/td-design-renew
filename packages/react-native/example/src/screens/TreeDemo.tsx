import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';
import { Tree, WhiteSpace, Button } from '@td-design/react-native';
import Container from '../components/Container';

const { modal } = Tree;

export default () => {
  const [checked, setChecked] = useState<string[]>();
  const treeData = [
    {
      title: 'parent 1',
      key: '0-0',
      children: [
        {
          title: 'parent 1-0',
          key: '0-0-0',
          children: [
            {
              title: 'leaf',
              key: '0-0-0-0',
            },
            {
              title: 'leaf',
              key: '0-0-0-1',
            },
          ],
        },
        {
          title: 'parent 1-1',
          key: '0-0-1',
          children: [{ title: <Text style={{ color: '#1890ff' }}>sss</Text>, key: '0-0-1-0' }],
        },
      ],
    },
    {
      title: 'parent 2',
      key: '2-0',
      children: [
        {
          title: 'parent 2-0',
          key: '2-2-0',
          children: [
            {
              title: 'leaf',
              key: '2-2-2-0',
            },
            {
              title: 'leaf',
              key: '2-2-2-1',
            },
          ],
        },
        {
          title: 'parent 1-1',
          key: '2-2-1',
          children: [{ title: <Text style={{ color: '#1890ff' }}>sss</Text>, key: '2-2-1-0' }],
        },
      ],
    },
    {
      title: 'parent 3',
      key: '3-0',
      children: [
        {
          title: 'parent 3-0',
          key: '3-1-0',
          children: [
            {
              title: 'leaf',
              key: '3-1-1-0',
            },
            {
              title: 'leaf',
              key: '3-1-1-1',
            },
          ],
        },
        {
          title: 'parent 3-1',
          key: '3-2-1',
          children: [{ title: <Text style={{ color: '#1890ff' }}>sss</Text>, key: '3-2-1-0' }],
        },
      ],
    },
  ];

  return (
    <Container>
      <ScrollView>
        {/* <WhiteSpace />
        <Text>???????????????:</Text>
        <WhiteSpace /> */}
        {/* <Tree
          treeData={treeData}
          checkedKeys={checked}
          onCheck={e => {
            console.log(e);
            setChecked(e);
          }}
        />
        <WhiteSpace /> */}

        {/* <Text>??????????????????:</Text>
        <WhiteSpace /> */}
        {/* <Tree
          treeData={treeData}
          defaultExpandAll
          onCheck={e => {
            console.log(e);
          }}
        /> */}

        {/* <WhiteSpace />
        <Text>????????????:</Text>
        <WhiteSpace /> */}
        {/* <Tree
          treeData={treeData}
          defaultCheckedKeys={['0-0', '3-2-1']}
          onCheck={e => {
            console.log(e);
          }}
        /> */}

        {/* <WhiteSpace />
        <Text>??????:</Text>
        <WhiteSpace /> */}
        {/* <Tree treeData={treeData} disabled /> */}

        {/* <WhiteSpace />
        <Text>????????????:</Text>
        <WhiteSpace /> */}
        {/* <Tree treeData={treeData} checkStrictly /> */}

        {/* <WhiteSpace />
        <Text>??????????????????:</Text>
        <WhiteSpace /> */}
        {/* <Tree treeData={treeData} defaultExpandedKeys={['0-0', '3-2-1']} /> */}

        {/* <WhiteSpace />
        <Text>????????????:</Text>
        <WhiteSpace />
        <Tree treeData={treeData} expandedKeys={['0-0', '3-2-1']} /> */}

        {/* <WhiteSpace />
        <Text>???????????????????????????:</Text>
        <WhiteSpace /> */}
        {/* <Tree treeData={treeData} showIcon={false} /> */}

        {/* <WhiteSpace />
        <Text>?????????icon:</Text>
        <WhiteSpace /> */}
        {/* <Tree
          treeData={treeData}
          icon={action => {
            return action ? <Text>??????</Text> : <Text>?????????</Text>;
          }}
        /> */}

        {/* <WhiteSpace />
        <Text>?????????:</Text>
        <WhiteSpace /> */}
        <Button
          title="modal"
          onPress={() =>
            modal({
              treeData: treeData,
              height: 300,
              defaultExpandAll: true,
            })
          }
        />
      </ScrollView>
    </Container>
  );
};
