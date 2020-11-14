import React from 'react';
import { useSelector } from 'react-redux';
import { ArcRotateCamera, Vector3, HemisphericLight, Axis, MeshBuilder, Color4 } from '@babylonjs/core';
import SceneComponent from 'babylonjs-hook';

const GetSegments: React.FC = (ring, aggregateHeight) => {

    let angle = 180/CanvasRenderingContext2D.segments;
    let ringOffset = (angle * (ring.offset / 100)) * 2 * Math.PI/180;
    let innerDiameter = ring.outerDiameter - ring.width;
    let outerLength = ring.outerDiameter * Math.tan(angle * Math.PI/180);
    let innerLength = innerDiameter * Math.tan(angle * Math.PI/180);

    let a = new Vector3(innerDiameter, aggregateHeight, innerLength * -1);
    let b = new Vector3(ring.outerDiameter, aggregateHeight, outerLength * -1);
    let c = new Vector3(ring.outerDiameter, aggregateHeight, outerLength);
    let d = new Vector3(innerDiameter, aggregateHeight, innerLength);

    let segments = []

    for (let i = 0; i < ring.segments; i++) {
        segments[i] = {
            id: `${ring.id} - ${i}`,
            vectors: [a, b, c, d], offset: (i * angle * 2 * Math.PI/180) + ringOffset
        }
    }

    return segments;
};

const onSceneReady = (scene) => {
    let camera = new ArcRotateCamera('Camera', Math.PI / 2, Math.PI / 180 * 60, 60, Vector3.Zero(), scene);
    camera.setTarget(Vector3.Zero());
    camera.attachControl(scene.getEngine().getRenderingCanvas(), true);

    let light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);
    light.intesity = 0.7;

    let aggregateHeight = 0;
    Object.keys(rings).map(key => {
        let ring = rings[key];
        let segments = GetSegments(ring, aggregateHeight) 
        aggregateHeight += ring.height;
        
    })
}