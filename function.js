
function zeroAdd (time){
    
    return time < 10 ? '0' + time : time;
};

function ampmCal(time) {
    return time <= 12 ? 'AM' : 'PM'; 
}

function week (day) {
    if(day == 0){
        return 'Sunday';
    } else if( day == 1){
        return 'Monday';
    }else if( day == 2){
        return 'Tuesday';
    }else if( day == 3){
        return 'Wednesday';
    }else if( day == 4){
        return 'Thursday';
    }else if( day == 5){
        return 'Friday';
    }else if( day == 6){
        return 'Saturday';
    }
};

function monthCal (month) {
    if( month === 0 ){
        return 'Jan'
    }else if( month === 1 ){
        return 'Feb'
    }else if( month === 2 ){
        return 'Mar'
    }else if( month === 3 ){
        return 'Apr'
    }else if( month === 4 ){
        return 'May'
    }else if( month === 5 ){
        return 'Jun'
    }else if( month === 6 ){
        return 'Jul'
    }else if( month === 7 ){
        return 'Agu'
    }else if( month === 8 ){
        return 'Sep'
    }else if( month === 9 ){
        return 'Oct'
    }else if( month === 10 ){
        return 'Nov'
    }else if( month === 11 ){
        return 'Dec'
    }
}

function loaderDynamic (start_val, current_val){

    return (current_val * 100)/ start_val;
}


function gpa (marks) {
    
    let gpa;

    if( marks >= 0 && marks <= 32 ) {
        gpa = 0;
    }else if( marks >= 33 && marks < 40 ) {
        gpa = 1;
    }else if (marks >= 40 && marks < 50) {
        gpa = 2;
    }else if (marks >= 50 && marks < 60) {
        gpa = 3;
    }else if (marks >= 60 && marks < 70) {
        gpa = 3.5;
    }else if (marks >= 70 && marks < 80) {
        gpa = 4;
    }else if (marks >= 80 && marks <= 100) {
        gpa = 5;
    }

    return gpa;

}


// This is Gread Calculetor

function gread (marks) {
    let gread;

    if(marks >= 0 && marks <= 32) {
        gread = ('F');
    }else if( marks >= 33 && marks < 40 ){
        gread = ('C');
    }else if( marks >= 40 && marks < 50 ){
        gread = ('D');
    }else if( marks >= 50 && marks < 60 ){
        gread = ('B');
    }else if( marks >= 60 && marks < 70 ){
        gread = ('A-');
    }else if( marks >= 70 && marks < 80 ){
        gread = ('A');
    }else if( marks >= 80 && marks <= 100 ){
        gread = ('A+')
    }

    return gread ;
}


//CGPA Calcculetor

let cgpa = ( bn, en, math, s, ss, agr ) => {

    
    let totalCgpa = ( bn + en + math + s + ss + agr )
    let cgpa = ( totalCgpa/6 )
    let ttg = totalGread(cgpa) ;
    if( bn === 0 || en === 0 || math === 0 || s === 0 || ss === 0 || agr === 0 ){
        return ` <p class="alert alert-danger"> Sorry You Are fail </p>`
    }else{
        return  ` <p class="alert alert-${ttg.color}"> Your CGPA = ${ cgpa.toFixed(2) } & Your Total CGPA: ${ ttg.gread} </p>` 
    }
    
}

// Total Gread Calculetor

function totalGread (cgpa) {
    if( cgpa >= 0 && cgpa < 1 ){
        return {
            gread : 'F',
            color : 'danger'
        }
    }else if(cgpa >= 1 && cgpa < 2) {
        return {
            gread : 'C',
            color : 'secondary'
        }
    }else if( cgpa >= 2 && cgpa < 3 ){
        return {
            gread : 'D',
            color : 'warning'
        }
    }else if( cgpa >= 3 && cgpa < 3.5 ) {
        return {
            gread : 'B',
            color : 'info'
        }
    }else if( cgpa >= 3.5 && cgpa < 4 ){
        return {
            gread : 'A-',
            color : 'primary'
        }
    }else if( cgpa >= 4 && cgpa < 5 ){
        return {
            gread : 'A',
            color : 'primary'
        }
    }else if( cgpa == 5 ){
        return {
            gread : 'A+',
            color : 'success'
        }
    }
}