---
layout: post
title:  "What Is The Use"
date:   2025-05-29 16:15:00 -0400
categories: apprenticeship update
---

Today I spent time preparing my presentation on the Interface
Segregation Principle. It's one of the SOLID design principles
in object-oriented programming.

The core idea behind Interface Segregation is this:

**Clients shouldn’t be forced to depend on methods they don’t use.**

I used the example of a smartphone app to make this more relatable.
When an app asks for permission to use your microphone, it shouldn't
also require access to your location or contacts. Those are separate
concerns. We wouldn’t want an app to be forced to implement features
it doesn’t actually need. That’s bad design, both in real life and in code.

To solidify my point, I created a SmartDevice interface with a bunch
of general smart home features, like recordAudio, setTemperature,
turnOn, lock, etc. Then I showed how a Smart Light ends up with a
“fat” class if it implements all of those methods, even though it
only needs something like turnOn and turnOff. Why should a light
bulb care about the thermostat or audio recording?

Here's my solution:
Break down the large interface into smaller, more specific ones.
Instead of one giant SmartDevice interface, create focused interfaces like:

- Switchable (for things that turn on/off)
- Lockable (for doors and locks)
- Recordable (for audio-enabled devices)
Now, a smart light only implements Switchable. The result is cleaner,
more maintainable, and more flexible code.

This principle may seem abstract at first, but thinking about it through
real-world examples like apps and smart home devices really helps make
me understand. I’m looking forward to presenting it!