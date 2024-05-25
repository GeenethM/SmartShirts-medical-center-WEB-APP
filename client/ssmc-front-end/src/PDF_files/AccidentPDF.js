import {Page, Text, Document, StyleSheet} from '@react-pdf/renderer'
import React from 'react';

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
      },
      title: {
        fontSize: 24,
        textAlign: "center",
        fontFamily: "Times-Roman",
      },
      text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    
      },
      header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
        fontFamily: "Times-Roman",
      },
      pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
        fontFamily: "Times-Roman",
      },
})

const AccidentPDF = (props) => {
    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.header} fixed>Accidents Patients report</Text>
                <Text style={styles.text}>Date of inceident: {props.doi}</Text>
                <Text style={styles.text}>Date of Notice on Form 10 to D.F.I.E {props.donf}</Text>
                <Text style={styles.text}>How Caused ?(e.g. Whether by machinery in motion and by what part of such machinery) {props.hc}</Text>
                <Text style={styles.text}>Name and EPF number of the Injured Person {props.epf}    {props.name}</Text>
                <Text style={styles.text}>Sex male {props.male}      female {props.female}</Text>
                <Text style={styles.text}>Age {props.age}</Text>
                <Text style={styles.text}>Usual employment (40 weeks complete): {props.uemp}</Text>
                <Text style={styles.text}>Precise occupation at the time of accident {props.precise}</Text>
                <Text style={styles.text}>Name of injury and whether fatal or not  yes  {props.fatal}     no       {props.not}     {props.in_name}    </Text>
                <Text style={styles.text}>Period of disablement in work days from   {props.from}       for {props.for}</Text>
                <Text style={styles.pageNumber}
                render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
            }/>
            </Page>
        </Document>
    );
    
};

export default AccidentPDF;