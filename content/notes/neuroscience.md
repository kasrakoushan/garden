---
title: Current Understanding of Neuroscience
enableToc: true
---

Inspired by silenceinbetween's lovely post [Current Understanding of Biology](https://silenceinbetween.substack.com/p/current-understanding-of-biology), I thought I'd write up a snapshot of my current understanding of neuroscience. Caveat: This will be written mostly off the top of my head, so excuse any typos or nonsequiturs.

I started "studying neuroscience" a few years ago, as in, I began reading an intro textbook a few years ago. I wrote about it early on in [A foray into neuroscience](https://bitsofwonder.substack.com/p/a-foray-into-neuroscience) and more recently in [Textbooks as a preventative for depression](https://bitsofwonder.substack.com/p/textbooks-as-a-preventative-for-depression), although the latter is more about the motivation behind reading a textbook.

So, what's the deal with tbe brain? It contains about a hundred billion neurons, and neurons connect to each other via synapses. Each neuron has a cell body, dendrites which take input, and an axon which produces output. 

![Neuron parts](notes/images/neuron-parts.png)*The basic anatomy of a neuron*

A note about anatomy which confused me at first: while the cell body projects into _one_ axon, that axon can subsequently branch and form synapses with multiple further neurons. That's why we say the neuron has _one_ axon even though it may ultimately feed its output to multiple neurons. (I'm not entirely sure about this point, tbh.) Dendrites, on the other hand, are present aplenty in each neuron, sometimes in the tens of thousands.

This is all well and good, except for the fact that there is this whole other category of cells in the brain called _glia_, and we're not 100% sure about what glia do. Some kind of peripheral support or cleanup role, perhaps? Or maybe they're actually very important.

With that picture set, let's talk about some high-level takeaways and questions.

### Are action potentials the correct frame of reference for neural activity?

First, let's explain what an action potential is. Neurons by default have an imbalance of charge on their membrane: the inside has slightly more negative charge than the outside:

![Neuron membrane](notes/images/neuron-resting-potential.png)*Neurons by default have slightly more negative charge on the inside than the outside*

By a series of complicated steps that I won't get into here (which involve the passive and active transfer of ions through ion channels and transporter proteins in the neuron's membrane), an "action potential" is a brief, sharp reversal of this electrical imbalance that propagates through the neuron's membrane like a wave. See this GIF:

![Action potential](notes/images/action-potential.gif)*This "travelling reversal" of electric charge is what constitutes an action potential on neurons.*

One other thing I should mention is: once the action potential has reached the end of the axon, there's a whole _other_ process for passing information onto the next neuron. Instead of directly creating an action potential on the next neuron, the axon _releases chemicals_ into the synapse. We call these chemicals neurotransmitters. The effect of the neurotransmitter is to trigger an action potential on the next neuron, _assuming_ there is sufficient neurotransmitter to actually trigger the neuron.

(Some more details: a little bit of neurotransmitter slightly _depolarizes_ the target neuron, i.e. it begins to reverse the default electric potential gradient. As more neurotransmitter builds up, the reversal of charge goes further and further until suddenly, it's strong enough to trigger a full action potential on the target neuron. Note that some neurotransmitters have the opposite effect: instead of reversing the membrane's polarity, they actually _increase_ it, i.e. they make it harder for the neuron to have an action potential. Each neuron has inputs from a number of preceding neurons, and the synapse for each of these feeder neurons is either inhibitory or excitatory.)

So, back to the big question: is the propagation of action potentials the correct way to understand what the brain is doing? Is it the building block of the brain's information processing capacities?

I think the canonical answer is: yes. I haven't heard of any other proposals for the fundamental unit of information processing in the brain. But, I've gotten the sense that individual neurons are doing a whole lot of computation _internally_ than we previously believed. And in any case, until we have a good understanding of _how_ the brain actually performs its functions (generate intelligence, consciousness, thought, perception) as an aggregate of action potentials, we can't be totally sure that we have the whole picture.

How do we know that action potentials are the relevant frame of analysis? From what I've seen, one thing we've established quite clearly is that our sensory systems transmit information to the brain via action potentials. (And our brain transmits commands to our muscles also via action potentials.) In particular, each of our sensory systems is really just a system for _conducing_ action potentials from some other kind of signal in the world:
- In our eyes, we have proteins which allow ions (charged particles) to pass through a membrane based on the _amount of light they're receiving_. In other words, we're converting light into action potentials.
- In our ears, we have these tiny hair cells which move ever so slightly as a result of vibrations in the air (which first propagate through a series of intermediate media like our eardrum, a few tiny bones called ossicles, and then a viscous fluid in the cochlea), and this movement triggers a change in electrical potential on the hair cells.
- In our nose, we have ion channels in receptor cells that open or close based on the presence of specific chemicals, such that the chemical itself (the odorant) triggers electrical activity which propogates to neurons. (Fun fact: AFAIK, the sense of smell is the oldest of all senses evolutionarily, so the apparatus is the most "primitive", compared to e.g. sight or sound. There is no elaborate machinery for converting signals from the world into action potentials, it's a pretty direct conversion.)

### Our ability to measure neural activity in humans is quite crude.

Part of this is a technological limitation and part of it is ethical. With humans, we generally avoid doing anything invasive on the brain unless we absolutely have to (e.g. to treat severe forms of epilepsy or treatment-resistant depression). We don't just cut out large pieces of the brain willy-nilly and see what happens (not anymore, at least).

So instead we measure the brain indirectly:
- Electrical activity (EEG): we tape electrodes all over the scalp and measure changes in electrical potential. Unfortunately, the electrical potential variations of an individual neuron are far too small to be measurable from the scalp, so the EEG is really measuring the aggregate activity of large numbers of neurons. This is why you see "brainwaves" on EEG recordings: you're only able to see activity if hundreds of thousands of neurons are all firing in harmony, and as it turns out the brain does have these patterns of activity at a few distinctive frequency/amplitude combinations (we call these e.g. alpha waves, beta waves, and so on.)
- 


This is also related to [AI discourse](notes/ai-discourse.md).