/* eslint-disable react/no-unstable-nested-components,react-native/no-inline-styles*/
/**
 * Rich Editor Example
 * @deprecated Please refer to example.hooks.js
 * @author wxik
 * @since 2019-06-24 14:52
 */
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  actions,
  FONT_SIZE,
  RichEditor,
  RichToolbar,
  getContentCSS
} from 'react-native-pell-rich-editor';
import {XMath} from '@wxik/core';
import {useChatGpt, ChatGptError} from 'react-native-chatgpt';
import { HomeNavigationProps } from '../navigation/HomeNavigation';
import {convert} from "html-to-text"


export interface RefLinkModal {
  setModalVisible: (visile: boolean) => void;
}


const Result = ({route}: HomeNavigationProps<'Result'>) => {

  const {title, description} = route.params

  const richText = useRef<RichEditor>(null);
  const linkModal = useRef<RefLinkModal>();
  const {sendMessage} = useChatGpt();
  const [responseTitle, setResponseTitle] = useState('');
  const [responseContent, setResponseContent] = useState('');

  useEffect(() => {
    const handleSendMessage = async (text: string, isTitle: boolean) => {
      console.log("print -", text, title, description)
      try {
        const response = sendMessage({
          message:text,
            onAccumulatedResponse: ({message, isDone}) => {
            if (isDone) {
              if (isTitle) {
                setResponseTitle(message);
              } else {
                setResponseContent(message);
              }
            }
          },
          onError: e => {
            console.log(e);
          },
        });

        // Optionally, you can handle the response here if needed
        console.log(response);
      } catch (error) {
        console.error('Error in handleSendMessage:', error);
      }
    };

    const fetchDataSequentially = async () => {
      await handleSendMessage(description, true);
      if (responseTitle !== '') {
        await handleSendMessage(description, false);
      }
    };

    // Call the asynchronous functions sequentially
    fetchDataSequentially();
  },[responseTitle]);

  useEffect(() => {
    contentRef.current = initHTML;
  },[responseTitle, responseContent])

  const initHTML = `<br/>
<center><b>${responseTitle}</b></center>
<center>
<br/>${responseContent}<br/><br/>
</center>
<br/>
`;

const contentRef = useRef(initHTML);

  // editor change data
  const handleChange = useCallback((html: string) => {
    // save html to content ref;
   contentRef.current = html;
  }, []);
  // editor height change

  const onInsertLink = useCallback(() => {
    // this.richText.current?.insertLink('Google', 'http://google.com');
    linkModal.current?.setModalVisible(true);
  }, []);

  const handleFontSize = useCallback(() => {
    // 1=  10px, 2 = 13px, 3 = 16px, 4 = 18px, 5 = 24px, 6 = 32px, 7 = 48px;
    let size = [1, 2, 3, 4, 5, 6, 7];
    richText.current?.setFontSize(
      size[XMath.random(size.length - 1)] as FONT_SIZE,
    );
  }, []);

  const handleForeColor = useCallback(() => {
    richText.current?.setForeColor('blue');
  }, []);


  // const handleSave = useCallback(() => {
  //   navigation.navigate('Preview',  {html: contentRef.current, css: getContentCSS()});
  // }, [navigation]);

  // const handleCopy = useCallback(() => {
  //   const source = {
  //     html: `<html><head><meta name="viewport" content="user-scalable=1.0,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">${getContentCSS()}</head><body>${contentRef.current}</body></html>`
  //   };
   
  // }, [navigation]);


  return (
    <SafeAreaView style={[styles.container]}>
      <View style={{flex: 1}}>
        <RichToolbar
          style={[styles.richBar]}
          flatContainerStyle={styles.flatStyle}
          editor={richText}
          selectedIconTint={'#2095F2'}
          disabledIconTint={'#bfbfbf'}
          onInsertLink={onInsertLink}
          actions={[
            actions.undo,
            actions.redo,
            actions.setBold,
            actions.setItalic,
            actions.setStrikethrough,
            actions.checkboxList,
            actions.insertOrderedList,
            actions.blockquote,
            actions.alignLeft,
            actions.alignCenter,
            actions.alignRight,
            actions.code,
            actions.line,
            actions.heading1,
            actions.heading2,
            actions.heading3,
            actions.heading4,
            actions.setParagraph,
            'insertEmoji',
            'insertHTML',
            'fontSize',
          ]} // default defaultActions
          iconMap={{
            [actions.heading1]: ({}: 'H1') => (
              <Text style={[styles.tib, {color: '#322'}]}>H1</Text>
            ),
            [actions.heading2]: ({}: 'H2') => (
              <Text style={[styles.tib, {color: '#322'}]}>H1</Text>
            ),
            [actions.heading3]: ({}: 'H3') => (
              <Text style={[styles.tib, {color: '#322'}]}>H1</Text>
            ),
            [actions.heading4]: ({}: 'H4') => (
              <Text style={[styles.tib, {color: '#322'}]}>H4</Text>
            ),
            [actions.setParagraph]: ({}: 'P') => (
              <Text style={[styles.tib, {color: '#322'}]}>P</Text>
            ),
          }}
          fontSize={handleFontSize}
          foreColor={handleForeColor}
        />
        {responseContent && (
          <ScrollView
            style={[styles.scroll]}
            keyboardDismissMode={'interactive'}
            nestedScrollEnabled={true}
            scrollEventThrottle={20}>
            <RichEditor
              initialFocus={false}
              firstFocusEnd={false}
              ref={richText}
              style={styles.rich}
              useContainer={true}
              initialHeight={400}
              enterKeyHint={'next'}
              initialContentHTML={initHTML}
              onChange={handleChange}
            />
            <Text>To copy your ad content, press and hold to select it.</Text>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};
export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  rich: {
    minHeight: 300,
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#e3e3e3',
  },
  richBar: {
    flex: 0.1,
    borderColor: '#efefef',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  richBarDark: {
    backgroundColor: '#191d20',
    borderColor: '#696969',
  },
  scroll: {
    backgroundColor: '#ffffff',
    flex: 0.9,
  },

  darkBack: {
    backgroundColor: '#191d20',
  },
  item: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#e8e8e8',
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  input: {
    flex: 1,
  },

  tib: {
    textAlign: 'center',
    color: '#515156',
  },

  flatStyle: {
    paddingHorizontal: 12,
  },
});
