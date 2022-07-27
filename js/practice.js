const arv = 300000;
const rc = .07;
const ic = .15;
const re = 50000;
const af = 5000;

function arvBreakdown() {
    const mao = (arv-((arv * rc) + (arv * ic) + re + af))
    
    console.log(mao);
    return mao;
}