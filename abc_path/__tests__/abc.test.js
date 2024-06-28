const abcPath = require('../src/abc');

test('Exercice1:', () => {
    let input = [
        "vkbjbzmbgb",
        "abcccpzouv",
        "fedopwlmcl",
        "glmnqrszyw",
        "hkrhiutymj",
        "ijqcmvwxoc",
        "pcvlpqzphl",
        "hsgvoklcxy",
        "urdjusmbmz",
        "rchbcausnp"
    ];
    let expected = [
        "----------",
        "abc-------",
        "fedop-----",
        "glmnqrsz--",
        "hk---uty--",
        "ij---vwx--",
        "----------",
        "----------",
        "----------",
        "----------"
    ];
    expect(abcPath(input)).toEqual(expected);


    input = [
        "xoikvoybwhvhkqs",
        "abcdpjzteanhnot",
        "wonezupfvoeetfc",
        "qpmfxfndfiqafpb",
        "rklgqyyltzvnugs",
        "sjihujprijqzvap",
        "tsoxsaoraruyqwk",
        "uwwonqolepmuqyy",
        "vwxwksnuizgbiht",
        "feyihffuvkbrfjw",
        "eezqukiqyzqjies",
        "uarhhcdjvpfwvck",
        "drtgqmroaaumyaq",
        "cbntlwlibaavsdc",
        "jpvogyiibfawjbn"
    ];
    expected = [
        "---------------",
        "abcd-----------",
        "-one-----------",
        "qpmf-----------",
        "rklg-----------",
        "sjih-----------",
        "t--------------",
        "u--------------",
        "vwx------------",
        "--y------------",
        "--z------------",
        "---------------",
        "---------------",
        "---------------",
        "---------------"
    ];
    expect(abcPath(input)).toEqual(expected);

    input = [
        "qrnwxqufaqpmehg",
        "gqpsdpeqovfjtbv",
        "azdizzjbedhsyzt",
        "mzbegprlfcbaxwv",
        "hoibquzhgbdrggu",
        "gynohfmijkdgpqt",
        "lwemjvulqlmnors",
        "eckkhvwucrblxwc",
        "hxunydbmsxdmpkh",
        "drdzvbronvfjlwz",
        "npnjnjqkfvupezb",
        "hvdaqvyrwhdtxbb",
        "nfpgaffyuefppae",
        "forhbqkezipkinq",
        "usxszgnwvwndzrl"
    ];
    expected = [
        "---------------",
        "---------------",
        "--------ed--yz-",
        "--------fcbaxwv",
        "-------hg-----u",
        "-------ijk--pqt",
        "---------lmnors",
        "---------------",
        "---------------",
        "---------------",
        "---------------",
        "---------------",
        "---------------",
        "---------------",
        "---------------"
    ];
    expect(abcPath(input)).toEqual(expected);
});
