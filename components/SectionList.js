// A performant interface for rendering sectioned lists, supporting the most handy features:

// Fully cross-platform.
// Configurable viewability callbacks.
// List header support.
// List footer support.
// Item separator support.
// Section header support.
// Section separator support.
// Heterogeneous data and item rendering support.
// Pull to Refresh.
// Scroll loading.

// // Example 1 (Homogeneous Rendering)
// <SectionList
//   renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
//   renderSectionHeader={({section: {title}}) => (
//     <Text style={{fontWeight: 'bold'}}>{title}</Text>
//   )}
//   sections={[
//     {title: 'Title1', data: ['item1', 'item2']},
//     {title: 'Title2', data: ['item3', 'item4']},
//     {title: 'Title3', data: ['item5', 'item6']},
//   ]}
//   keyExtractor={(item, index) => item + index}
// />
// // Example 2 (Heterogeneous Rendering / No Section Headers)
// const overrideRenderItem = ({ item, index, section: { title, data } }) => <Text key={index}>Override{item}</Text>

// <SectionList
//   renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
//   sections={[
//     { title: 'Title1', data: ['item1', 'item2'], renderItem: overrideRenderItem },
//     { title: 'Title2', data: ['item3', 'item4'] },
//     { title: 'Title3', data: ['item5', 'item6'] },
//   ]}
// />